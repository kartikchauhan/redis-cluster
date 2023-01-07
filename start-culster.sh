startCluster() {

    docker run -d -v \
    $PWD/cluster-config.conf:/usr/local/etc/redis/redis.conf \
    -p $((6379+$1)):$((6379+$1)) \
    --name redis-$1 --net redis_cluster \
    redis redis-server /usr/local/etc/redis/redis.conf
}

numInstances=1

if [ $# -eq 1 ]
    then
        numInstances="$1"
fi

for ((i=1; i<=numInstances; i++)); do
    startCluster "$i"
done

