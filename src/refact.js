onSubmit(e) {
    e.preventDefault();
    const error = this.validate();
    this.setState({ 
        loading: true,
        alert: 0
    });
    if(!error){
        this.setState({ 
            loading: false 
        });
        return <Redirect push to="/menucards"/>;
    }
    else{
        this.setState({ 
            alert: 1,
            loading: false 
        });
    }     
}