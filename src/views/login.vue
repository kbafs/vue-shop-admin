<template>
  <!--el-row :代表行：一行，el-col：代表列，一列，用flex布局 ，el-form：一列里的内容，就是整个登录框 -->
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
      <el-form ref="form" :model="form" label-position="top" label-width="80px" class="login-form">
        <el-form-item label="用户名" prop="region">
          <el-input v-model="form.name" prop="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="region">
          <el-input v-model="form.password" prop="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
 <script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
.row-bg {
  height: 100%;
  background-color: #2d434c;
}
.login-form {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 20px;
  min-width: 400px;
}
</style>
