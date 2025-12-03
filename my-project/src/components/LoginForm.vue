<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
// 定义组件的props，允许传入class属性以便自定义样式
// 使用cn函数合并默认类名和传入的类名
// 组件结构包括Card、FieldGroup等UI组件，构建登录表单
// 表单包含邮箱和密码字段，以及登录按钮和谷歌登录按钮
// 还包括忘记密码链接和创建账户链接
// 所有文本均为中文
// 确保表单元素具有适当的属性，如id、type和placeholder
// 使用Button组件实现按钮样式
// 使用Card组件实现卡片样式
// 使用Field组件实现表单字段样式
// 使用Input组件实现输入框样式
// 使用FieldLabel和FieldDescription组件实现标签和描述样式
// 表单处理逻辑
const email = ref('')
const password = ref('')
const handleSubmit = (e: Event) => {
  e.preventDefault()
  // 在这里处理登录逻辑，例如验证用户输入的邮箱和密码
  console.log('登录:', {email:email.value,password: password.value})
}
</script>

<template>
  <!-- 没有cn函数的问题：冲突的类名（p-4 p-6）p-6 可能不会生效 使用cn函数的话：动解决冲突，保留 p-6-->
  <div :class="cn('flex flex-col gap-6', props.class)">
    <Card>
      <CardHeader>
        <CardTitle>登录账户</CardTitle>
        <CardDescription>
          请在此输入您的电子邮件地址以登录您的账户
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit="handleSubmit">
          <FieldGroup>
            <Field>
              <FieldLabel for="email">
                邮箱
              </FieldLabel>
              <Input
                id="email"
                v-model="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </Field>
            <Field>
              <div class="flex items-center">
                <FieldLabel for="password">
                  密码
                </FieldLabel>
                <a
                  href="#"
                  class="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  忘记密码
                </a>
              </div>
              <Input id="password" v-model="password" type="password" required />
            </Field>
            <Field>
              <Button type="submit">
                登录
              </Button>
              <Button variant="outline" type="button">
                谷歌登录
              </Button>
              <FieldDescription class="text-center">
                没有账户？
                <a href="#">
                  创建账户
                </a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
