<template>
<div class="col-md-8">
    <div class="container bootdey">
        <div class="col-md-12 bootstrap snippets">
            <div class="panel">
                <div class="panel-body">
                    <textarea v-model="form.content" class="form-control" rows="2" placeholder="What are you thinking?"></textarea>
                    <div class="mar-top clearfix">
                        <button class="btn btn-sm btn-primary pull-right" @click="Share">
                            <i class="fa fa-pencil fa-fw"></i> Share
                        </button>
                        <a class="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
                        <a class="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
                        <a class="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    RepositoryFactory as Repo
} from "../../repository/RepositoryFactory";
const PR = Repo.get("request");
export default {
    name: "feeds",
    components: {},

    data() {
        return {
            form: {
                content: "",
                image: "",
            },
            toast: () => {},
        };
    },
    mounted() {
        this.toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: true,
            timer: 10000,
        });
    },
    methods: {
        async Share() {
            let res = await PR.share(this.form);

            console.log(res);
            // if (res.user) {
            //   this.toast({
            //     type: "success",
            //     title: "Post Successfull!",
            //   });
            // } else {
            //   this.toast({
            //     type: "error",
            //     title: `${res.data.message}`,
            //   });
            // }
        },
    },
};
</script>

<style lang="scss">
/* body {
  margin-top: 20px;
  background: #ebeef0;
} */

.img-sm {
    width: 46px;
    height: 46px;
}

.panel {
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.075);
    border-radius: 0;
    border: 0;
    margin-bottom: 15px;
}

.panel .panel-footer,
.panel> :last-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.panel .panel-heading,
.panel> :first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.panel-body {
    padding: 25px 20px;
}

.media-block .media-left {
    display: block;
    float: left;
}

.media-block .media-right {
    float: right;
}

.media-block .media-body {
    display: block;
    overflow: hidden;
    width: auto;
}

.middle .media-left,
.middle .media-right,
.middle .media-body {
    vertical-align: middle;
}

.thumbnail {
    border-radius: 0;
    border-color: #e9e9e9;
}

.tag.tag-sm,
.btn-group-sm>.tag {
    padding: 5px 10px;
}

.tag:not(.label) {
    background-color: #fff;
    padding: 6px 12px;
    border-radius: 2px;
    border: 1px solid #cdd6e1;
    font-size: 12px;
    line-height: 1.42857;
    vertical-align: middle;
    -webkit-transition: all 0.15s;
    transition: all 0.15s;
}

.text-muted,
a.text-muted:hover,
a.text-muted:focus {
    color: #acacac;
}

.text-sm {
    font-size: 0.9em;
}

.text-5x,
.text-4x,
.text-5x,
.text-2x,
.text-lg,
.text-sm,
.text-xs {
    line-height: 1.25;
}

.btn-trans {
    background-color: transparent;
    border-color: transparent;
    color: #929292;
}

.btn-icon {
    padding-left: 9px;
    padding-right: 9px;
}

.btn-sm,
.btn-group-sm>.btn,
.btn-icon.btn-sm {
    padding: 5px 10px !important;
}

.mar-top {
    margin-top: 15px;
}
</style>
