function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (var index in collection_a){
    for(var index_b in object_b.value){
      if(collection_a[index].key === object_b.value[index_b]){
        collection_a[index].count-=1;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
