import React from 'react';
import classes from './FIleInput.module.css'

const FileInput = ({...props}) => {
    return (
        <label className={classes.inputFile}>
            {/*<span className={classes.inputFileText} type="text"></span>*/}
            <input type="file" accept={'audio/wav'} {...props} />
            <span className={classes.inputFileBtn}>Выберите файл</span>
        </label>
    );
};

export default FileInput;