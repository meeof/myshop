import './product.css';
import styled from "styled-components";
let Container = styled.div`
  display: flex;
  padding: 5px;
  max-width: 400px;
  flex-direction: column;
  > * {
    margin-bottom: 5px;
  }
  @media (min-width: 430px) {
    border: solid lightgray 1px;
  }
  @media (max-width: 430px) {
    border-bottom: solid lightgray 1px;
  }
`;
export default function ComRevCard({user, text, img, comRev}) {
    let from = '';
    if (comRev === 'comments') {
        from = `Комментарий от ${user} :`;
    }
    else if (comRev === 'reviews'){
        from = `Отзыв от ${user} :`;
    }
    return <Container>
        <span>{from}</span>
        {img !== '' ? <div className="imgReviewComment">
            <img alt={'#'} src="#"/>
        </div> : ''}
        <p>{text}</p>
    </Container>
}