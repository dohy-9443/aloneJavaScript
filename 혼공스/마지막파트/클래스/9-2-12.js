// 클래스 선언
class LifeCycle {
  call() {
    this.a();
    this.b();
    this.c();
  }

  a() {
    console.log("a() 메소드 호출");
  }
  b() {
    console.log("b() 메소드 호출");
  }
  c() {
    console.log("c() 메소드 호출");
  }
}

// 인스턴스 생성
new LifeCycle().call();
