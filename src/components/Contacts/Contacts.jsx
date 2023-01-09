import React from 'react';
import s from "./Contacts.module.scss";
import Title from "../Title/Title";

const Contacts = () => {
    return (
        <div className={s.container}>
            <Title title={'Contacts'}/>


            <div className={s.contentSection}>
                <div className={s.infoSection}>
                    <div className={s.contactsBlock}>

                    </div>
                    <div className={s.contactsBlock}>

                    </div>
                    <div className={s.contactsBlock}>

                    </div>
                    <div className={s.contactsBlock}>

                    </div>
                </div>
                <div className={s.formSection}>
                    <div className={s.inputBlock}>
                        <input className={s.input} type="text" placeholder={'Name'}/>
                        <input className={s.input} type="email" placeholder={'Email'}/>
                    </div>

                    <textarea name="message" id="" cols="30" rows="10">

                    </textarea>
                </div>
            </div>

        </div>
    );
};

export default Contacts;


// <div className={s.container}>
//     <div className={s.animate}></div>
//     <div className={s.wrapper}>
//         <h2 className={s.title}>
//             Contacts
//         </h2>
//         <div className={s.content}>
//             <div className={s.description}>
//                 <div>C</div>
//                 <div>o</div>
//                 <div>n</div>
//                 <div>t</div>
//                 <div>a</div>
//                 <div>c</div>
//                 <div>t</div>
//                 <div>s</div>
//             </div>
//         </div>
//     </div>
// </div>