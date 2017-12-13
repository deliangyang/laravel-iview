<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-menu-left {
        background: #464c5b;
    }

    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }

    .layout-hide-text .layout-text {
        display: none;
    }

    .ivu-col {
        transition: width .2s ease-in-out;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <div class="layout-logo-left"></div>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </template>
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                    <MenuItem name="1-3">Option 3</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </template>
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
            </Menu>
            </Col>
            <Col :span="spanRight">
                <div class="layout-header">
                    <Row>
                        <Col span="1">
                            <Button type="text" @click="toggleClick">
                                <Icon type="navicon" size="32"></Icon>
                            </Button>
                        </Col>
                        <Col span="23">
                            <Menu mode="horizontal" :theme="theme1" active-name="1">
                            <MenuItem name="1">
                                <Icon type="ios-paper"></Icon>
                                内容管理
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="ios-people"></Icon>
                                用户管理
                            </MenuItem>
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="stats-bars"></Icon>
                                    统计分析
                                </template>
                                <MenuGroup title="使用">
                                    <MenuItem name="3-1">新增和启动</MenuItem>
                                    <MenuItem name="3-2">活跃分析</MenuItem>
                                    <MenuItem name="3-3">时段分析</MenuItem>
                                </MenuGroup>
                                <MenuGroup title="留存">
                                    <MenuItem name="3-4">用户留存</MenuItem>
                                    <MenuItem name="3-5">流失用户</MenuItem>
                                </MenuGroup>
                            </Submenu>
                            <MenuItem name="4">
                                <Icon type="settings"></Icon>
                                综合设置
                            </MenuItem>
                        </Menu>
                        </Col>
                    </Row>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="">Index</BreadcrumbItem>
                        <BreadcrumbItem href="#">Apps</BreadcrumbItem>
                        <BreadcrumbItem>App</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <i-circle :percent="80">
                            <span class="demo-Circle-inner" style="font-size:24px">80%</span>
                        </i-circle>
                        <i-circle :percent="100" stroke-color="#5cb85c">
                            <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
                        </i-circle>
                        <i-circle :percent="35" stroke-color="#ff5500">
                            <span class="demo-Circle-inner">
                                <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
                            </span>
                        </i-circle>

                        <router-link to="/hello">gooooooo</router-link>
                        <router-view></router-view>

                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; ydl
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                spanLeft: 3,
                spanRight: 21,
                theme1: 'light'
            }
        },
        computed: {
            iconSize() {
                return this.spanLeft === 3 ? 14 : 24;
            }
        },
        methods: {
            toggleClick() {
                if (this.spanLeft === 3) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 3;
                    this.spanRight = 21;
                }
            }
        }
    }
</script>
