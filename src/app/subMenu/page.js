import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import Banner from '@/Components/Banner/Banner';
import Notice from '@/Components/Notice/Notice';
import Publications from '@/Components/Publication/Publications';

import React from 'react';

const SubMenu = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
          <Publications></Publications>
            <Notice></Notice>
         
           <Footer></Footer>
        </div>
    );
};

export default SubMenu;