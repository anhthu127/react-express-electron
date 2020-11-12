export const getCurrentDate = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    console.log(dateTime)
    return dateTime;
}

export const city_province = "D:\\Project3\\dating_with_my_dog\\backend\\src\\Database\\tinh_tp.json"
export const district = "D:\\Project3\\dating_with_my_dog\\backend\\src\\Database\\quan_huyen.json"
export const village_ward = "D:\\Project3\\dating_with_my_dog\\backend\\src\\Database\\xa_phuong.json"

export const category_movies = {
    
    0: 'Kinh dị',
    1: 'Khoa học viễn tưởng',
    2: 'Bạo lực',
    3: 'Hài hước',
    5: 'Ma thuật',
    6: ' Hành động kịch tính'

}

export const categories = ['kinh dị, Khoa học viễn tưởng, Bạo lực, Hài hước, Ma thuật, Hành động kịch tích']