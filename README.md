# Docker image for Magento 2.3.5

## Quick start

The easiest way to start Magento 2 with MySQL is using [Docker Compose](https://docs.docker.com/compose/). Just clone this repo and run following command in the root directory. The default `docker-compose.yml` uses MySQL and phpMyAdmin.

1.进入目录运行以下命令(确保正确安装docker 和 docker-compose)
~~~
$ docker-compose up -d
~~~


## Installation

After starting the container, you'll see the setup page of Magento 2. You can use the script `install-magento` to quickly install Magento 2. The installation script uses the variables in the `env` file.

### Magento 2
2.初始化magento
~~~
$ docker exec -it docker-magento2 install-magento
~~~

ps:等待安装完成就可以访问,以下都是演示数据,配置修改等内容

### Sample data

3.安装演示数据(安装时间比较长,切勿中断否则重头来过!)
~~~
$ docker exec -it docker-magento2 install-sampledata
~~~

4.删除容器清空数据(如果有问题无法解决可使用该命令,然后从第一步开始.)
~~~
$ docker-compose down -v
~~~


For admin username and password, please refer to the file `env`. You can also change the file `env` to update those configurations. Below are the default configurations.
配置文件:包含各种默认密码账号, 语言 货币等配置
~~~
MYSQL_HOST=db
MYSQL_ROOT_PASSWORD=myrootpassword
MYSQL_USER=magento
MYSQL_PASSWORD=magento
MYSQL_DATABASE=magento

MAGENTO_LANGUAGE=en_GB
MAGENTO_TIMEZONE=Pacific/Auckland
MAGENTO_DEFAULT_CURRENCY=NZD
MAGENTO_URL=http://local.magento
MAGENTO_BACKEND_FRONTNAME=admin
MAGENTO_USE_SECURE=0
MAGENTO_BASE_URL_SECURE=0
MAGENTO_USE_SECURE_ADMIN=0

MAGENTO_ADMIN_FIRSTNAME=Admin
MAGENTO_ADMIN_LASTNAME=MyStore
MAGENTO_ADMIN_EMAIL=amdin@example.com
MAGENTO_ADMIN_USERNAME=admin
MAGENTO_ADMIN_PASSWORD=magentorocks1
~~~

### Why accessing http://local.magento?
修改本地host, 重定向localhost   用local.magento    magento官方推荐使用域名访问.

For development and testing in the local environment, using `localhost` as Magento 2 URL has some issues. The default `env` file use `http://local.magento` as the value of `MAGENTO_URL`. You need to [edit your `hosts` file](https://support.rackspace.com/how-to/modify-your-hosts-file/) to add the mapping from `local.magento` to `localhost`. You can use any domain names as long as it looks like a real domain, not `localhost`.

If `localhost` doesn't work, try using `127.0.0.1`.

```
127.0.0.1    local.magento
```

For example, if you want to change the default currency, just update the variable `MAGENTO_DEFAULT_CURRENCY`, e.g. `MAGENTO_DEFAULT_CURRENCY=USD`.

To get all the possible values of `MAGENTO_LANGUAGE`, `MAGENTO_TIMEZONE` and `MAGENTO_DEFAULT_CURRENCY`, run the corresponding command shown below:
进阶操作:可执行一些非常规操作,参考magento2文档.

* `MAGENTO_LANGUAGE` - `bin/magento info:language:list`
* `MAGENTO_TIMEZONE` - `bin/magento info:timezone:list`
* `MAGENTO_DEFAULT_CURRENCY` - `bin/magento info:currency:list`

For example, to get all possible values of `MAGENTO_LANGUAGE`, run

```bash
$ docker run --rm -it alexcheng/magento2 bin/magento info:language:list
```

### Database
需要数据持久化的同学可以参考,不建议持久化数据.

The default `docker-compose.yml` uses MySQL as the database and starts [phpMyAdmin](https://www.phpmyadmin.net/). The default URL for phpMyAdmin is `http://localhost:8580`. Use MySQL username and password to log in.


## Backup and restore of volume data

After starting the container, you'll see the setup page of Magento 2. If you want to skip installation you can restore existing installation data.

### Restore
~~~
$ docker-compose down --volumes
$ docker volume create docker-magento2_db-data
$ docker run --rm -v docker-magento2_db-data:/recover -v %cd%/backup:/backup ubuntu bash -c "cd /recover && tar xzpvf /backup/backup_db.tgz --strip 3"
$ docker volume create docker-magento2_magento-data
$ docker run --rm -v docker-magento2_magento-data:/recover -v %cd%/backup:/backup ubuntu bash -c "cd /recover && tar xzpvf /backup/backup_web.tgz --strip 3"
$ docker-compose up -d
~~~

### Backup
~~~
$ docker-compose stop
$ docker run --rm --volumes-from docker-magento2_db_1 -v %cd%/backup:/backup ubuntu tar czvf /backup/backup_db.tgz /var/lib/mysql
$ docker run --rm --volumes-from docker-magento2_web_1 -v %cd%/backup:/backup ubuntu tar czvf /backup/backup_web.tgz /var/www/html
$ docker-compose start
~~~

## FAQ

### How to keep installed Magento?

You can add a volume to folder `/var/www/html`, see the `docker-compose.yml` file.

```
volumes: 
  - magento-data:/var/www/html 
```

### Where is the database?

Magento 2 cannot run without a database. This image is for Magento 2 only. It doesn't contain MySQL server. MySQL server should be started in another container and linked with Magento 2 container. It's recommended to use Docker Compose to start both containers. You can also use [Kubernetes](https://kubernetes.io/) or other tools.



### How to update Magento 2 installation configurations?

Depends on how the container is used,

* When using the GUI setup page of Magento 2, update configurations in the UI.
* When using the script, update configurations in the `env` file. 
* When starting Magento 2 as a standalone container, use `-e` to pass environment variables.

### Why getting access denied error after changing the default DB password?

If you change the default DB password in `env` file and get the access denied error when installing Magento 2, see [this issue comment](https://github.com/alexcheng1982/docker-magento2/issues/10#issuecomment-355382150).

## Develop and test using this Docker image

As I mentioned before, this Docker image is primarily used for development and testing. Depends on the tasks you are trying to do, there are different ways to use this Docker image.
