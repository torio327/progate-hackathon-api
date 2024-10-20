import { Hono } from 'hono'
import {menuList} from "./data";

const app = new Hono()

app.get('/menuList', (c) => {
  return c.json(menuList,201)
})

app.get('/',(c)=>{
  return c.text("Hello hono")
})

app.get('/menuList/:id',(c)=>{
  const id:string=c.req.param('id')
  if(Number(id)>menuList.length){
    return c.json({
      message:"Not found"
    },404)
  }
  return c.json(menuList[Number(id)-1],201)
})

export default app
