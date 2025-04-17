import { create } from "zustand";

const loginStore = create((set) => ({
    isLogin: false,
    email: "",
    login: (email) => set({ isLogin: true, email }), // 로그인 처리 함수
    logout: () => set({ isLogin: false, email: "" }), // 로그아웃 처리 함수
}));

export default loginStore;
