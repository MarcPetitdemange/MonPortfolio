import React, {useState} from 'react';
import {Grid, MenuItem, TextareaAutosize, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Label} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    form: {
        padding: '1em'
    },
    TextFiled: {
        marginTop : '1em',
        marginBottom : '1em'
    }
}));

const ProjectAdd = () => {


    const classes = useStyles();

    const [imageState, setImageState] = React.useState({
        images: []
    });

    const [formState, setFormState] = React.useState({
        categories: []
    });

    const handleFieldChange = event => {
        console.log(event);
        event.persist();
        setFormState(formState => ({
            ...formState,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value
        }));
    };

    const changeEvent = (e) => {
        /*let val = e.currentTarget.files[0];
        let formData = new FormData();
        formData.append("photo", val);*/
        let state = [];
        Array.from(e.currentTarget.files).forEach(file => {
            state.push(URL.createObjectURL(file));
        });
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            setImageState(imageState => ({
                images: state
            }))
        }


        /*fetch('/upload/image', {method: "POST", body: formData}).then(r => {
            debugger;
        });*/
    }


    return (
        <form className={classes.form} noValidate autoComplete="off">
            <Grid
                justify="space-between" // Add it here :)
                container
            >
                <Grid item>
                        <TextField style={{position : 'left'}}className={classes.TextFiled} id="title" name="title" label="Titre" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                        <TextField className={classes.TextFiled} id="desc" name="desc" label="Description" variant="outlined" multiline fullWidth />
                </Grid>
                <Grid item xs={12}>
                        <TextField
                            style={{
                                width: '40%',
                                float: 'left',
                            }}
                            className={classes.TextFiled}
                            select
                            name="categories"
                            id="categories"
                            variant="outlined"
                            label="Catégories"
                            SelectProps={{
                                multiple: true,
                                value: formState.categories,
                                onChange: handleFieldChange
                            }}
                        >
                            <MenuItem value="Javascript">Javascript</MenuItem>
                            <MenuItem value="Java">Java</MenuItem>
                            <MenuItem value="Angular">Angular</MenuItem>
                            <MenuItem value="React">React</MenuItem>
                            <MenuItem value="Node">Node</MenuItem>
                            <MenuItem value="Android">Android</MenuItem>
                            <MenuItem value="C++">C++</MenuItem>
                            <MenuItem value="C">C</MenuItem>
                            <MenuItem value="C#">C#</MenuItem>
                            <MenuItem value="Python">Python</MenuItem>
                        </TextField>
                </Grid>
                <Grid item xs={12} style={{padding: '1em', background: 'linear-gradient(to bottom, #ffffff, #4286f4)', borderRadius: '1em'}}>
                  {
                      imageState.images.map((value,index) =>{
                          debugger;
                          return <img  style={{borderRadius:'100%',margin : '1em', width: '20em', height:'20em'}} src={imageState.images[index]}></img>
                      })
                  }
                </Grid>
                <Grid item xs={12}>
                    <label htmlFor="upload-photo">
                        <input
                            style={{ display: 'none' }}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                            multiple
                            onChange={changeEvent}
                        />

                        <Button color="primary" variant="contained" component="span" style={{margin:'1em'}}>
                            Upload button
                        </Button>
                    </label>
                </Grid>
                <Grid container justify="flex-end">
                    <Button color="primary" variant="contained" style={{marginRight: '1em'}}>Confirm</Button>
                    <Button color="secondary" variant="outlined">Cancel</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ProjectAdd;
