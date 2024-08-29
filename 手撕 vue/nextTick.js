var vm = new Vue({
    el: '#example',
    data: {
        message: '123'
    }
});
vm.message = 'new message'; // 更改数据
vm.$el.textContent === 'new message'; // false
Vue.nextTick(function () {
    vm.$el.textContent === 'new message'; // true
});

Vue.component('example', {
    template: '<span>{{ message }}</span>',
    data: function () {
        return {
            message: '未更新'
        };
    },
    // promise
    methods: {
        updateMessage: function () {
            this.message = '已更新';
            console.log(this.$el.textContent); // => '未更新'
            this.$nextTick(function () {
                console.log(this.$el.textContent); // => '已更新'
            });
        }
    },

    // async/await
    _methods: {
        updateMessage: async function () {
            this.message = '已更新';
            console.log(this.$el.textContent); // => '未更新'
            await this.$nextTick();
            console.log(this.$el.textContent); // => '已更新'
        }
    }
});
