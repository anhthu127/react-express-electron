import { category_movies } from "../../libs/constants";

const { default: IntroVideo } = require("../Core/IntroVideo")

class MidIntroVideo {

    listIntro = async () => {
        let listMovies = []
        category_movies.map((value, index) => {
            console.log(value);
            const followCategory = await IntroVideo.findAll({
                where: {
                    category: element[index]
                }
            });
            listMovies.push(followCategory)
        })

        return listMovies;
    }
}


export default MidIntroVideo