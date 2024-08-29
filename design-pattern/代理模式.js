// 员工
class Staff {
    constructor(affairType) {
        this.affairType = affairType;
    }
    applyFor(target) {
        target.receiveApplyFor(this.affairType);
    }
}
// 秘书
class Secretary {
    constructor() {
        this.leader = new Leader();
    }
    receiveApplyFor(affair) {
        this.leader.receiveApplyFor(affair);
    }
}
//领导
class Leader {
    receiveApplyFor(affair) {
        console.log(`批准:${affair}`);
    }
}

const staff = new Staff('升职加薪');
staff.applyFor(new Secretary()); // 批准:升职加薪
