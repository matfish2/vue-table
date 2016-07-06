module.exports =  function(data) {
  this.data = data[this.options.serverDataFieldName];
  this.count = data.count;

  this.addCustomColumns();

  setTimeout(function(){
    this.$dispatch('vue-tables.loaded',data);
  }.bind(this),0);

}
