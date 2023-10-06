import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'เลย์ รสกุ้งเผา+รสน้ำจิ้มซีฟู้ด 48กรัม', img: 'https://cf.shopee.co.th/file/d29369fb05c80bd6214af49a95e79017', price: 20 },
    { name: ' เลย์ ร็อค มันฝรั่งทอดกรอบแผ่นหยัก รสหมึกย่างฮอตชิลลี่ ขนาด 158 กรัม ', img: 'https://cf.shopee.co.th/file/b8be48902b4ad72c610e8f051227db98', price: 20 },
    { name: ' เลย์มันฝรั่งแท้ทอดกรอบแผ่นหยักรสมะเขือเทศ 158 กรัม ', img: 'https://backend.tops.co.th/media/catalog/product/8/8/8850718810826.jpg', price: 20 },
    { name: 'เลย์ มันฝรั่งแท้ทอดกรอบแผ่นเรียบ รสต้มยำมันกุ้งหม้อไฟ 67 กรัม ', img: 'https://st.bigc-cs.com/public/media/catalog/product/48/88/8850718819348/8850718819348_1-20230404112203-.jpg', price: 20 },
    { name: ' เลย์แผ่นหยักรสต้มยำกุ้ง 73กรัม ', img: 'https://backend.tops.co.th/media/catalog/product/8/8/8850718813612.jpg', price: 20 },
    { name: ' เลย์คลาสสิครสไข่เค็ม 46 กรัม ', img: 'https://www.grocerlock.com/wp-content/uploads/2021/04/8850718812899.jpg', price: 20 },
    { name: ' เลย์ คลาสสิค รสเมี่ยงคำครบรส 50 กรัม ', img: 'https://sentosakhonkaen.com/wp-content/uploads/2021/07/S_0023_8850718807925.jpg', price: 20 },
    { name: ' เลย์คลาสสิครสซาวครีมและหัวหอม 75 กรัม ', img: 'https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30183827/005412366_P.jpg', price: 20 },
    { name: ' เลย์ มันฝรั่งแท้ทอดกรอบแผ่นหยัก กลิ่นปีกไก่ทอดและรสซอลพริกศรีราชา 67 กรัม ', img: 'https://www.bigc.co.th/_next/image?url=https:%2F%2Fst.bigc-cs.com%2Fpublic%2Fmedia%2Fcatalog%2Fproduct%2F99%2F88%2F8850718819799%2F8850718819799_1-20230208094809-.jpg&w=1200&q=90', price: 20 },
    { name: ' เลย์ แมกซ์ มันฝรั่งแท้ทอดกรอบแผ่นหยัก รสกูร์เมต์ ซาวครีมและหัวหอม 71 กรัม ', img: 'https://st.bigc-cs.com/public/media/catalog/product/14/88/8850718815814/8850718815814_1-20230404160011-.jpg', price: 20 },
  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
