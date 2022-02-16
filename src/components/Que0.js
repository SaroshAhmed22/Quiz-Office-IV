import Questions from './Questions'


const Que0 = () => {

    const changeQues = () => {


    }


    let view = Questions[0]
    console.log(view)
    return (
        <div>
            <div className='container'>
                <div className="container">
                    <h2 className='mt-4'>Question {view.id} of 10</h2>
                    <p>Entertainment board games</p>
                    <div>
                        <i className="fa fa-star " aria-hidden="true"></i>
                        <i className="fa fa-star myicon " aria-hidden="true"></i>
                        <i className="fa fa-star  myicon iconlast" aria-hidden="true"></i>
                        <i className="fa fa-star  myicon iconlast" aria-hidden="true"></i>
                    </div>

                    <h5 className='mt-3'>{view.Question}</h5>


                    <div className=' option-flex'>
                        <div className='my_option d-flex justify-content-center mt-4'>
                            <h5>{view.options[0]}</h5>

                        </div>

                        <div className='my_option mt-4 d-flex justify-content-center' >
                            <h5>{view.options[1]}</h5>
                        </div>

                        <div className='my_option mt-4 d-flex justify-content-center' >
                            <h5>{view.options[2]}</h5>
                        </div>
                        <div className='my_option mt-4 d-flex justify-content-center' >
                            <h5>{view.options[3]}</h5>
                        </div>
                    </div>
                </div>
            </div>
            {









                // Questions.map((elem, index) => {
                //     return (

                //         <div className='container'>
                //             <div className="container">
                //                 <h2 className='mt-4'>Question {elem.id} of 10</h2>
                //                 <p>Entertainment board games</p>
                //                 <div>
                //                     <i className="fa fa-star  " aria-hidden="true"></i>
                //                     <i className="fa fa-star myicon " aria-hidden="true"></i>
                //                     <i className="fa fa-star  myicon" aria-hidden="true"></i>
                //                     <i className="fa fa-star  myicon iconlast" aria-hidden="true"></i>
                //                     <i className="fa fa-star  myicon iconlast" aria-hidden="true"></i>
                //                 </div>

                //                 <h5 className='mt-3'>{elem.Question}</h5>


                //                 <div className=' option-flex'>
                //                     <div className='my_option d-flex justify-content-center mt-4'>
                //                         <h5>{elem.options[0]}</h5>

                //                     </div>

                //                     <div className='my_option mt-4 d-flex justify-content-center' >
                //                         <h5>{elem.options[1]}</h5>
                //                     </div>

                //                     <div className='my_option mt-4 d-flex justify-content-center' >
                //                         <h5>{elem.options[2]}</h5>
                //                     </div>

                //                     <div className='my_option mt-4 d-flex justify-content-center' >
                //                         <h5>{elem.options[3]}</h5>
                //                     </div>
                //                 </div>
                //             </div>
                //             <button>Next Question</button>
                //         </div>
                //     )
                // })
            }

        </div>
    )
}

export default Que0;