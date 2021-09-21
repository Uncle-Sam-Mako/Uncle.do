//When to do list is empty

import { Fragment } from "react/cjs/react.production.min";
import illustration from '../img/illustration.svg';

const EmptyToDo = function(){
   return(
        <Fragment>
            <div className="EmptyToDo max-w-md mx-auto my-auto text-center px-5">
                <div className="my-5">
                    <img src={illustration} alt="" />
                </div>
                <div>
                    <p>Vous n'avez aucune tâche à effectuer aujourd'hui.</p>
                    <p className="text-customRed text-xl font-bold">Vos tâches quotidiennes s'afficheront ici !</p>
                </div>
            </div>
        </Fragment>
    )
}

export default EmptyToDo;