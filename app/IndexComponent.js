
const DELAY = 1000;

class IndexCtrl {

  constructor($interval) {
    this.currentTime = this.getDate();
    this.$interval = $interval;
  }

  $onInit() {
    this.$interval(() => {
      this.currentTime = this.getDate();
    }, DELAY);
  }

  getDate() {
    const date = new Date();
    return this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes()) + ':' + this.addZero(date.getSeconds());
  }

  addZero(i) {
    if (i < 10) i = '0' + i;
    return i;
  }
}

IndexCtrl.$inject = ['$interval'];

export default {
  template  : 'Current time: {{ $ctrl.currentTime }}',
  controller: IndexCtrl
};
