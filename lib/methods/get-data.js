var merge = require('merge');

module.exports = function() {

  var data = {};
  data[this.options.queryParams.query] = this.query;
  data[this.options.queryParams.limit] = this.limit;
  data[this.options.queryParams.orderBy] = this.orderBy.column;
  data[this.options.queryParams.ascending] = this.orderBy.ascending;
  data[this.options.queryParams.page] = this.page;
  data[this.options.queryParams.byColumn] = this.options.filterByColumn?1:0;

  data = merge(data, this.options.params, this.customQueries);

  this.$dispatch('vue-tables.loading', data);

  return this.$http.get(this.url, data);
}
