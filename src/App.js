//https://mui.com/material-ui/react-table/ 에서 테이블 이용하는 것 참조
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '8611234',
  'gender' : '남자',
  'job' : '대학생'
},
{'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name' : '김길동',
  'birthday' : '8611234',
  'gender' : '남자',
  'job' : '대학생'
},
{'id': 3,
'image': 'https://placeimg.com/64/64/any',
'name' : '고길동',
'birthday' : '8611234',
'gender' : '남자',
'job' : '대학생'
}]
function App() {
  // const { classes } = this.props;
  return (
    <Paper className="root" elevation={6} style={{ marginTop: 40, width: '100%', overflowX: "auto"}}>
      <Table className="table" sx={{ minWidth: 680 }} aria-label='a dense table' style={{minWidth: 1080}}>
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {customers.map(c => {
        return (
          <Customer 
        key = {c.id}
        id = {c.id}
        image = {c.image}
        name= {c.name}
        birthday= {c.birthday}
        gender= {c.gender}
        job= {c.job}
      /> );
      })}
      </TableBody>
      
      </Table>
    
    </Paper>
  );
}

export default App;
