import { Image } from 'react-bootstrap
import bear from '';

export default function HomePage() {

    return (
        <>
        <div>
    <Image src={bear} fluid />
    </div>
    <Grid columns={2} divided style={{marginTop:"15vh", textAlign:"center"}}>
    <Grid.Row>
      <Grid.Column >
        <div onClick={()=>navigate("/addRestaurant")}>
      <Icon name='food' color='grey' size='massive' />
      <Typography gutterBottom variant="h4" component="div" >
      הצגת כל החברים בקופה
    </Typography>
    <Typography variant="body2" color="text.secondary">
      הוספת חבר חדש לקופתינו
    </Typography>  
    <Typography variant="body2" color="text.secondary">
      למאגר החיסונים  
    </Typography> 
    </div>
      </Grid.Column>
      <Grid.Column>
      <Icon name='compose' color='grey' size='massive'/>
      


   <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='medium' src={logo} />
        <div onClick={()=>navigate('managerPage')}>
        <List horizontal inverted divided link size='small' >
          <List.Item as='a' >
            for maneger:
          </List.Item>
          <List.Item as='a' >
          <Icon circular name='settings'/>
          </List.Item>
        </List></div>
      </Container>
    </Segment>
    </>
  );
  }


