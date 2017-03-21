module.exports =  function(data) {
  this.data = data.data;
  //this.count = data.count;
  this.count = this.options.pagination.key.split('.').reduce(index, data);

  this.addCustomColumns();

  setTimeout(function(){
    this.$dispatch('vue-tables.loaded',data);
  }.bind(this),0);

  function index(obj,i) {return obj[i]}
}
