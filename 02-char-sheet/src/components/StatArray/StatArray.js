import React, { useState } from 'react';
import StatRow from './StatRow';

function StatArray(props){
    const [stats, setStats] = useState([
        {stat:'Str',score:props.str},
        {stat:'Dex',score:props.dex},
        {stat:'Con',score:props.con},
        {stat:'Int',score:props.int},
        {stat:'Wis',score:props.wis},
        {stat:'Cha',score:props.cha}
    ]);
    return(
        <ul>
            <StatRow stat={stats[0].stat} score={stats[0].score}/>
        </ul>
    );
};

export default StatArray;