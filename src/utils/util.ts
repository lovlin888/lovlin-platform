export function generateId(num:any) {
  let str = '';
  for (let i = 0; i < num; i++) {
    str += Math.floor(Math.random() * 10);
  }
  return str;
}



export function zipImg(file:any) {
  return new Promise((resolve) => {
    if (file && (file.size / 1024 > 500 || file.type !== 'image/gif')) {
      let img = new Image()
      img.src = URL.createObjectURL(file)
      let cvs = document.createElement('canvas')
      let maxRatio = 0.75 // 大图比率
      let minRatio = 0.8 // 小图比率
      let imgQulity = 0.3 // 图像质量
      img.onload = async function () {
        let ratio = (img.naturalWidth > 1000 || img.naturalHeight > 1000) ? maxRatio : minRatio
        cvs.width = img.naturalWidth * ratio
        cvs.height = img.naturalHeight * ratio
        let ctx:any = cvs.getContext('2d')
        ctx.drawImage(img, 0, 0, cvs.width, cvs.height)
        // 压缩后新图的 base64
        let zipBase64 = cvs.toDataURL(file.type, imgQulity)
        let fileFixed = await dataURLtoFile(zipBase64, file.name, file.type)
        console.log(fileFixed,'fileFixed')
        resolve(fileFixed)
      }
    } else { resolve(file) }
  })
}



// base64转图片
export function dataURLtoFile(dataurl:any, filename:any, mime:any) {
  return new Promise((resolve) => {
    let arr = dataurl.split(';base64,')
    let suffix = mime.split('/')[1]
    let bstr = atob(arr[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    let data = new File([u8arr], `${filename}.${suffix}`, {
      type: mime
    })
    resolve(data)
  })
}
