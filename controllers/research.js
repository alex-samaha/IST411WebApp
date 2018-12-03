let scholar = require('google-scholar');
var exports = module.exports = {};

exports.showSearchPage = function(req, res) {
    res.render('searchPage');
};

exports.getResearchPapers = function(req, res) {
    console.log(req.body);
    scholar.search(req.body.searchTerm)
    .then(resultsObj => {
        console.log(resultsObj);
        res.json(resultsObj);
    })
    .catch(function(err) {
        console.log(err);
        console.log("Error with getting the research papers");
    });
};

exports.test = function(req, res) {
    scholar.search('thermodynamics')
    .then(resultsObj => {
        console.log(resultsObj);
        res.json(resultsObj);
    })
    .catch(function(err) {
        console.log(err);
        console.log("Error with getting the research papers through the get request");
        let sampleJSON = {

            "results": [
                {
                    "title": "Introduction to chemical engineering thermodynamics",
                    "url": "https://pubs.acs.org/doi/pdfplus/10.1021/ed027p584.3",
                    "authors": [
                        {
                            "name": "JM Smith",
                            "url": "https://scholar.google.com/citations?user=7kxBo-wAAAAJ&hl=en&oe=ASCII&oi=sra"
                        }
                    ],
                    "description": "THE data collected by members of the Biological Chemistry Section of the Division of Radioactivity in the Manhattan Department of the University of Rochester are presented, discussed, and summarized in this volume of the National Nuclear Energy Series. The�…",
                    "citedCount": 0,
                    "citedUrl": "https://scholar.google.comjavascript:void(0)",
                    "relatedUrl": "",
                    "pdf": "http://www.academia.edu/download/31188144/PlanEvaluacionTermoAplicadaA2012.pdf"
                },
                {
                    "title": "CODATA key values for thermodynamics",
                    "authors": [
                        {
                            "name": "JD Cox",
                            "url": ""
                        },
                        {
                            "name": "DD Wagman",
                            "url": ""
                        },
                        {
                            "name": "VA Medvedev",
                            "url": ""
                        }
                    ],
                    "description": "",
                    "citedCount": 0,
                    "citedUrl": "https://scholar.google.comjavascript:void(0)",
                    "relatedUrl": ""
                },
                {
                    "title": "Nonequilibrium thermodynamics in biophysics",
                    "url": "http://agris.fao.org/agris-search/search.do?recordID=US201300666887",
                    "authors": [
                        {
                            "name": "A Katzir-Katchalsky",
                            "url": ""
                        },
                        {
                            "name": "PF Curran",
                            "url": ""
                        }
                    ],
                    "description": "… Lookup the document at: google-logo. Nonequilibrium thermodynamics in biophysics. Translate\nwith. translator. This translation tool is powered by Google. FAO is not responsible for the accuracy\nof translations. Nonequilibrium thermodynamics in biophysics [1965]. Katzir-Katchalsky, Aharon�…",
                    "citedCount": 0,
                    "citedUrl": "https://scholar.google.comjavascript:void(0)",
                    "relatedUrl": ""
                },
                {
                    "title": "Introduction to thermodynamics of irreversible processes",
                    "url": "http://adsabs.harvard.edu/abs/1967itti.book.....P",
                    "authors": [
                        {
                            "name": "I Prigogine&#xFFFD;- New York: Interscience",
                            "url": ""
                        },
                        {
                            "name": "1967",
                            "url": ""
                        },
                        {
                            "name": "3rd ed.",
                            "url": ""
                        },
                        {
                            "name": "1967",
                            "url": ""
                        }
                    ],
                    "description": "Title: Introduction to thermodynamics of irreversible processes. Authors: Prigogine, I.\nPublication: New York: Interscience, 1967, 3rd ed. Publication Date: 00/1967. Origin:\nESO. Bibliographic Code: 1967itti.book.....P. Abstract. Not Available\n",
                    "citedCount": 0,
                    "citedUrl": "https://scholar.google.comjavascript:void(0)",
                    "relatedUrl": ""
                },
                {
                    "title": "",
                    "authors": [ ],
                    "description": "",
                    "citedCount": 0,
                    "citedUrl": "",
                    "relatedUrl": ""
                },
                {
                    "title": "Non-equilibrium thermodynamics",
                    "url": "https://books.google.com/books?hl=en&lr=&id=mfFyG9jfaMYC&oi=fnd&pg=PP1&dq=thermodynamics&ots=ig_jBzJ1qA&sig=Gcx04PXkS8i1B4opv6EhjEztk_Y",
                    "authors": [
                        {
                            "name": "SR De Groot",
                            "url": ""
                        },
                        {
                            "name": "P Mazur",
                            "url": ""
                        }
                    ],
                    "description": "The study of thermodynamics is especially timely today, as its concepts are being applied to problems in biology, biochemistry, electrochemistry, and engineering. This book treats irreversible processes and phenomena—non-equilibrium thermodynamics. SR de Groot�…",
                    "citedCount": 0,
                    "citedUrl": "https://scholar.google.comjavascript:void(0)",
                    "relatedUrl": "",
                    "pdf": "http://itf.fys.kuleuven.be/fpspXIII/material/Sengers_FPSPXIII_slides.pdf"
                },
                {
                    "title": "Statistical thermodynamics of liquid mixtures: a new expression for the excess Gibbs energy of partly or completely miscible systems",
                    "url": "https://nyaspubs.onlinelibrary.wiley.com/doi/abs/10.1002/aic.690210115",
                    "authors": [
                        {
                            "name": "DS Abrams",
                            "url": ""
                        },
                        {
                            "name": "JM Prausnitz&#xFFFD;- AIChE Journal",
                            "url": ""
                        },
                        {
                            "name": "1975",
                            "url": ""
                        }
                    ],
                    "description": "To obtain a semi‐theoretical equation for the excess Gibbs energy of a liquid mixture, Guggenheim's quasi‐chemical analysis is generalized through introduction of the local area fraction as the primary concentration variable. The resulting universal quasi‐chemical�…",
                    "citedCount": 0,
                    "citedUrl": "https://scholar.google.comjavascript:void(0)",
                    "relatedUrl": "",
                    "pdf": "http://dns2.asia.edu.tw/~ysho/YSHO-English/2000%20Engineering/PDF/AIChE%20J21,%20116.pdf"
                },
                {
                    "title": "The dynamics and thermodynamics of compressible fluid flow, Vol. 1",
                    "authors": [
                        {
                            "name": "AH Shapiro",
                            "url": ""
                        }
                    ],
                    "description": "",
                    "citedCount": 0,
                    "citedUrl": "https://scholar.google.comjavascript:void(0)",
                    "relatedUrl": ""
                },
                {
                    "title": "Thermodynamics and an Introduction to Thermostatistics",
                    "url": "https://aapt.scitation.org/doi/pdf/10.1119/1.19071",
                    "authors": [
                        {
                            "name": "HB Callen",
                            "url": ""
                        }
                    ],
                    "description": "Note by the Book Review Editor–From time to time I hope to publish “comparative reviews''of textbooks in a given field, as an aid to instructors in preparing their courses. The purpose is not to identify the “best” book on the subject, but rather to compare and assess different ap�…",
                    "citedCount": 0,
                    "citedUrl": "https://scholar.google.comjavascript:void(0)",
                    "relatedUrl": "",
                    "pdf": "http://cds.cern.ch/record/450289/files/0471862568_TOC.pdf"
                },
                {
                    "title": "Molecular thermodynamics of fluid-phase equilibria",
                    "url": "https://books.google.com/books?hl=en&lr=&id=VSwc1XUmYpcC&oi=fnd&pg=PT3&dq=thermodynamics&ots=u_qKHLBYcS&sig=irhallxFgPhZqS5A5gjF36b6rMA",
                    "authors": [
                        {
                            "name": "JM Prausnitz",
                            "url": ""
                        },
                        {
                            "name": "RN Lichtenthaler",
                            "url": ""
                        },
                        {
                            "name": "EG de Azevedo",
                            "url": ""
                        }
                    ],
                    "description": "The classic guide to mixtures, completely updated with new models, theories, examples, and data. Efficient separation operations and many other chemical processes depend upon a thorough understanding of the properties of gaseous and liquid mixtures. Molecular�…",
                    "citedCount": 0,
                    "citedUrl": "https://scholar.google.comjavascript:void(0)",
                    "relatedUrl": ""
                },
                {
                    "title": "Nonequilibrium statistical thermodynamics",
                    "authors": [
                        {
                            "name": "DN Zubarev",
                            "url": ""
                        }
                    ],
                    "description": "",
                    "citedCount": 0,
                    "citedUrl": "https://scholar.google.comjavascript:void(0)",
                    "relatedUrl": ""
                }
            ],
            "count": 1850000,
            "nextUrl": "https://scholar.google.com/scholar?start=10&q=thermodynamics&hl=en&oe=ASCII&as_sdt=0,39",
            "prevUrl": ""
        
        };
        res.json(sampleJSON);
    });
}
