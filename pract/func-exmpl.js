function foo(params1, params2) {
    if (params1) {
      console.log(params1);
    } else if (params2) {
        console.log(params2);
    } else {
        console.log("Нет параметров");
    }
  }
  foo(undefined, 2);