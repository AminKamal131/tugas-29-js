function panggil(){
    let data = "Belajar menimmba ilmu programing bersama Niomic"
    let str = new RegExp("bersama")

    console.log(str.exec(data))
}

panggil()