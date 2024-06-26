
import lawyer_1 from './lawyer_1.jpg'
import lawyer_2 from './lawyer_2.jpg'
import lawyer_3 from './lawyer_3.jpg'
import lawyer_4 from './lawyer_4.jpg'
import lawyer_5 from './lawyer_5.jpg'
import lawyer_6 from './lawyer_6.jpg'
import lawyer_7 from './lawyer_7.jpg'
import lawyer_8 from './lawyer_8.jpg'
import lawyer_9 from './lawyer_9.jpg'
import lawyer_10 from './lawyer_10.jpg'
import lawyer_11 from './lawyer_11.jpg'
import lawyer_12 from './lawyer_12.jpg'



import legal_consultaion from './legal_consultation.png'
import legal_education from './legal_education.png'
import lawyer_videos from './lawyer_videos.png'
import legal_questions from './legal_questions.png'
import blogs_news from './blogs_news.png'
import lawyers from './lawyers.png'
import header1 from './header1.png'
import qcard from './qcard.png'
import video1 from './video1.png'
import video2 from './video2.png'
import video3 from './video3.png'
import about1 from './about1.png'
import about2 from './about2.png'
import lawyers_bg from './lawyers_bg.png'
import search from './search.png'
import down_arrow from './down_arrow.png'
import verified from './verified.png'
import lady_justice from './lady_justice.mp4'
import legalquestionimg1 from './legalquestionimg1.png'

export const assets = {
    legal_consultaion,
    legal_education,
    lawyer_videos,
    legal_questions,
    blogs_news,
    lawyers,
    header1,
    qcard,
    video1,
    video2,
    video3,
    about1,
    about2,
    lawyers_bg,
    search,
    down_arrow,
    verified,
    lady_justice,
    legalquestionimg1,
}



export const lawyers_details = [

    {
        lawyer_name: "W.S.H.Samaraweera",
        lawyer_image: lawyer_1,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "W.S.Kamalsiri Perera",
        lawyer_image: lawyer_2,
        lawyer_city: "Colombo",
        lawyer_expirience: 10,
        average_rating: 4,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English",
            medium_3: "Tamil"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2 + "|" + this.medium.medium_3;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "H.Weerasekara",
        lawyer_image: lawyer_3,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "W.S.H.Samaraweera",
        lawyer_image: lawyer_4,
        lawyer_city: "Galle",
        lawyer_expirience: 8,
        average_rating: 5,
        medium: {
            medium_1: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "P.S.Perera",
        lawyer_image: lawyer_5,
        lawyer_city: "Kandy",
        lawyer_expirience: 6,
        average_rating: 2,
        medium: {
            medium_1: "Sinhala",
            medium_2: "Tamil"
        },
        specification: {
            specification_1: "Divoce"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1;
        }
    },

    {
        lawyer_name: "R.P.Dasuni Dias",
        lawyer_image: lawyer_6,
        lawyer_city: "Matara",
        lawyer_expirience: 5,
        average_rating: 4,
        medium: {
            medium_1: "Sinhala"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "S.A.Silvya",
        lawyer_image: lawyer_7,
        lawyer_city: "Jaffna",
        lawyer_expirience: 12,
        average_rating: 1,
        medium: {
            medium_1: "Tamil",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "P.G.K.Herath",
        lawyer_image: lawyer_8,
        lawyer_city: "Gampaha",
        lawyer_expirience: 11,
        average_rating: 5,
        medium: {
            medium_1: "Sinhala"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "Kumudu Rathnayaka",
        lawyer_image: lawyer_9,
        lawyer_city: "Kandy",
        lawyer_expirience: 5,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "S.Kulasekara",
        lawyer_image: lawyer_10,
        lawyer_city: "Kandy",
        lawyer_expirience: 6,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "S.H.Bandara Herath",
        lawyer_image: lawyer_11,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 4,
        medium: {
            medium_1: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "H.K.P.Dasanayaka",
        lawyer_image: lawyer_12,
        lawyer_city: "Kandy",
        lawyer_expirience: 11,
        average_rating: 2,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1;
        }
    },
    
    
    {
        lawyer_name: "W.S.H.Samaraweera",
        lawyer_image: lawyer_1,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "W.S.Kamalsiri Perera",
        lawyer_image: lawyer_2,
        lawyer_city: "Colombo",
        lawyer_expirience: 10,
        average_rating: 4,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English",
            medium_3: "Tamil"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2 + "|" + this.medium.medium_3;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "H.Weerasekara",
        lawyer_image: lawyer_3,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "W.S.H.Samaraweera",
        lawyer_image: lawyer_4,
        lawyer_city: "Galle",
        lawyer_expirience: 8,
        average_rating: 5,
        medium: {
            medium_1: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "P.S.Perera",
        lawyer_image: lawyer_5,
        lawyer_city: "Kandy",
        lawyer_expirience: 6,
        average_rating: 2,
        medium: {
            medium_1: "Sinhala",
            medium_2: "Tamil"
        },
        specification: {
            specification_1: "Divoce"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1;
        }
    },

    {
        lawyer_name: "R.P.Dasuni Dias",
        lawyer_image: lawyer_6,
        lawyer_city: "Matara",
        lawyer_expirience: 5,
        average_rating: 4,
        medium: {
            medium_1: "Sinhala"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "S.A.Silvya",
        lawyer_image: lawyer_7,
        lawyer_city: "Jaffna",
        lawyer_expirience: 12,
        average_rating: 1,
        medium: {
            medium_1: "Tamil",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "P.G.K.Herath",
        lawyer_image: lawyer_8,
        lawyer_city: "Gampaha",
        lawyer_expirience: 11,
        average_rating: 5,
        medium: {
            medium_1: "Sinhala"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "Kumudu Rathnayaka",
        lawyer_image: lawyer_9,
        lawyer_city: "Kandy",
        lawyer_expirience: 5,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case",
            specification_3: "Family matters"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2 + " | " + this.specification.specification_3;
        }
    },

    {
        lawyer_name: "S.Kulasekara",
        lawyer_image: lawyer_10,
        lawyer_city: "Kandy",
        lawyer_expirience: 6,
        average_rating: 3,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "S.H.Bandara Herath",
        lawyer_image: lawyer_11,
        lawyer_city: "Kandy",
        lawyer_expirience: 7,
        average_rating: 4,
        medium: {
            medium_1: "English"
        },
        specification: {
            specification_1: "Divoce",
            specification_2: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1 + " | " + this.specification.specification_2;
        }
    },

    {
        lawyer_name: "H.K.P.Dasanayaka",
        lawyer_image: lawyer_12,
        lawyer_city: "Kandy",
        lawyer_expirience: 11,
        average_rating: 2,
        medium: {
            medium_1: "Sinhala",
            medium_2: "English"
        },
        specification: {
            specification_1: "Civil case"
        },
        lawyer_skills_medium: function() {
            return this.medium.medium_1 + " | " + this.medium.medium_2;
        },
        lawyer_skills_specification: function() {
            return this.specification.specification_1;
        }
    },
]