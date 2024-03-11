import { Typography, Paper, Grid, Box, ThemeProvider, createTheme } from '@mui/material';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Sidebar from '/src/components/ui/SideBar.jsx';
import '/src/assets/css/Dashboard.css'; // Make sure the path matches where your Dashboard.css is located

// Define a purple-based theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7', // Purple
    },
    secondary: {
      main: '#673ab7', // Another shade of purple
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const Dashboard = () => {

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Events',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(103, 58, 183, 0.5)',
        borderColor: 'rgba(103, 58, 183, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Sample data for Line chart (Participants)
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Participants',
        data: [120, 190, 300, 500, 200, 300],
        fill: true,
        backgroundColor: 'rgba(103, 58, 183, 0.2)',
        borderColor: 'rgba(103, 58, 183, 1)',
      },
    ],
  };

  // Sample data for Pie chart (Venue Distribution)
  const pieChartData = {
    labels: ['Venue A', 'Venue B', 'Venue C'],
    datasets: [
      {
        label: 'Venue Distribution',
        data: [50, 30, 20],
        backgroundColor: [
          'rgba(103, 58, 183, 0.5)',
          'rgba(233, 30, 99, 0.5)',
          'rgba(33, 150, 243, 0.5)',
        ],
        borderColor: [
          'rgba(103, 58, 183, 1)',
          'rgba(233, 30, 99, 1)',
          'rgba(33, 150, 243, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const userData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Registrations',
        data: [120, 150, 180, 220, 200, 240],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const paperStyle = { p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' };

  return (
    <ThemeProvider theme={theme}>
      <div className="sidebar"><Sidebar /></div>
      <Box className="mainContent">
        <Typography variant="h4" gutterBottom component="div" className="dashboardTitle">
          Dashboard
        </Typography>
        <Grid container spacing={3} sx={{padding: theme.spacing(3)}} alignItems="stretch">
  {/* Bar Chart for Total Events */}
  <Grid item xs={12} sm={12} md={6}>
    <Paper elevation={3} sx={paperStyle}>
      <Typography variant="h6" component="h3" gutterBottom>
        Event Distribution
      </Typography>
      <Bar data={barChartData} />
    </Paper>
  </Grid>

  {/* Line Chart for Participants */}
  <Grid item xs={12} sm={12} md={6}>
    <Paper elevation={3} sx={paperStyle}>
      <Typography variant="h6" component="h3" gutterBottom>
        Participant Growth
      </Typography>
      <Line data={lineChartData} />
    </Paper>
  </Grid>

  {/* Pie Chart for Venue Distribution */}
  <Grid item xs={5} sm={5} md={6}>
    <Paper elevation={3} sx={paperStyle}>
      <Typography variant="h6" component="h3" gutterBottom>
        Venue Distribution
      </Typography>
      <Pie data={pieChartData} />
    </Paper>
  </Grid>

  {/* Chart for User Registrations */}
  <Grid item xs={12} sm={12} md={6}>
    <Paper elevation={3} sx={paperStyle}>
      <Typography variant="h6" component="h3" gutterBottom>
        User Registrations
      </Typography>
      <Line data={userData} />
    </Paper>
  </Grid>
</Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
