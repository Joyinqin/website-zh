---
title: 离线安装
sidebar_label: 离线安装
---

import PickVersion from '@site/src/components/PickVersion'

本篇文档描述如何离线安装 Chaos Mesh。

## 环境准备

在安装前，请先确保离线环境中已经安装 Docker 并部署了 Kubernetes 集群。如果环境尚未准备好，请参考以下链接进行 Docker 的安装和 Kubernetes 的部署：

- [Docker](https://www.docker.com/get-started)
- [Kubernetes](https://kubernetes.io/docs/setup/)

## 准备安装

为了离线安装 Chaos Mesh，首先需要在网络连通的条件下获取所有镜像和 Chaos Mesh 仓库压缩包。

### 指定版本号

首先，设置 Chaos Mesh 的版本号到环境变量中：

<PickVersion className="language-bash">
export CHAOS_MESH_VERSION=latest
</PickVersion>

### 归档 Chaos Mesh 镜像

通过已经设置的版本号拉取镜像：

```sh
docker pull pingcap/chaos-mesh:${CHAOS_MESH_VERSION}
docker pull pingcap/chaos-daemon:${CHAOS_MESH_VERSION}
docker pull pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}
```

保存镜像为 tar 包：

```sh
docker save pingcap/chaos-mesh:${CHAOS_MESH_VERSION} > image-chaos-mesh.tar
docker save pingcap/chaos-daemon:${CHAOS_MESH_VERSION} > image-chaos-daemon.tar
docker save pingcap/chaos-dashboard:${CHAOS_MESH_VERSION} > image-chaos-dashboard.tar
```

:::note 注意

如需使用 `DNSChaos`，请额外拉取 `pingcap/coredns` 镜像，链接为：

<https://hub.docker.com/r/pingcap/coredns>

:::

### 下载 Chaos Mesh 仓库压缩包

下载 Chaos Mesh 的 zip 包到本地环境：

```sh
curl https://github.com/chaos-mesh/chaos-mesh/archive/refs/heads/${CHAOS_MESH_VERSION}.zip -o chaos-mesh.zip
```

:::note 注意

`latest` 版本对应 Chaos Mesh 仓库的 `master` 分支，链接为：

<https://github.com/chaos-mesh/chaos-mesh/archive/refs/heads/master.zip>

:::

### 拷贝文件

现在，所有安装所需的文件已准备完毕。最后一步，将下列文件拷贝到离线环境中：

- `image-chaos-mesh.tar`
- `image-chaos-daemon.tar`
- `image-chaos-dashboard.tar`
- `chaos-mesh.zip`

## 安装

现在你的离线环境已经拥有了 Chaos Mesh 镜像的 tar 包和仓库的 zip 包，下面开始安装。

### 加载镜像

从 tar 包中加载镜像：

```sh
docker load < image-chaos-mesh.tar
docker load < image-chaos-daemon.tar
docker load < image-chaos-dashboard.tar
```

### 推送镜像至 Registry

设置 Chaos Mesh 版本和 Registry 地址：

<PickVersion className="language-bash">
export CHAOS_MESH_VERSION=latest;
export DOCKER_REGISTRY=localhost:5000
</PickVersion>

标记镜像使其指向 Registry：

```sh
export CHAOS_MESH_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-mesh:${CHAOS_MESH_VERSION}
export CHAOS_DAEMON_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-daemon:${CHAOS_MESH_VERSION}
export CHAOS_DASHBOARD_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}
docker image tag pingcap/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE
docker image tag pingcap/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE
docker image tag pingcap/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE
```

推送镜像至 Registry：

```sh
docker push $CHAOS_MESH_IMAGE
docker push $CHAOS_DAEMON_IMAGE
docker push $CHAOS_DASHBOARD_IMAGE
```

### 使用 Helm 安装

解压 Chaos Mesh 的 zip 包：

```sh
unzip chaos-mesh.zip -d chaos-mesh && cd chaos-mesh
```

创建命名空间：

```sh
kubectl create ns chaos-testing
```

指定镜像值以安装 Chaos Mesh：

```sh
helm install chaos-mesh helm/chaos-mesh -n=chaos-testing \
  --set chaosDaemon.image=$CHAOS_DAEMON_IMAGE \
  --set controllerManager.image=$CHAOS_MESH_IMAGE \
  --set dashboard.image=$CHAOS_DASHBOARD_IMAGE
```