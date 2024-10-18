import { Hono } from 'hono'
import {menuList} from "./data";

const app = new Hono()

app.get('/menuList', (c) => {
  return c.json(menuList,201)
})

app.get('/',(c)=>{
  return c.text("Hello hono")
})

export default app
