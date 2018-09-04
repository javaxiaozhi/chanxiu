/**
 * Created by 黄帅 on 2018/9/3.
 */

import ajax2promise from "../components/ajax2promise";

export async function getOpenClasses () {
    this.openedClasses = await ajax2promise({
        ins: this,
        url: "/class/opens"
    });

    this.$apply();
}

export async function getMyClasses() {
    this.myClasses = await ajax2promise({
        ins: this,
        url: "/class/myadds"
    });

    this.$apply();
}

export async function createClass() {
    await ajax2promise({
        ins: this,
        method: "POST",
        url: "/class/myadds"
    });

    this.$apply();
}

export async function getClassDetail() {
    this.detail = await ajax2promise({
        ins: this,
        url: "/class/brief",
        params: {
            id: this.classID
        }
    });

    this.$apply();
}