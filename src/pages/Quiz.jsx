/* eslint-disable react/no-unknown-property */
const Quiz = ({ quiz }) => {
  console.log(quiz);

const {marks, title, email, name, feedback, link} = quiz


  return (
  
 
            <tr>
              <th>1</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{title}</td>
              <td>{link}</td>
              <td>{marks}</td>
             
                <td></td>
            </tr>
  );
};

export default Quiz;
