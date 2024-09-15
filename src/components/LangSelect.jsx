import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const LangSelect = () => {
  const [language, setLanguage] = React.useState('English');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel 
          id="demo-simple-select-label" 
          sx={{ color: 'white' }}  
        >
          Language
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Language"
          onChange={handleChange}
          sx={{ 
            color: 'white',  
            bgcolor: 'transparent',  
            '& .MuiSelect-icon': { color: 'white' }  
          }}
        >
          <MenuItem value="English" sx={{ color: 'black' }}>English</MenuItem>
          <MenuItem value="English(Canada)" sx={{ color: 'black' }}>English (Canada)</MenuItem>
          <MenuItem value="English(United Kingdom)" sx={{ color: 'black' }}>English (United Kingdom)</MenuItem>
          <MenuItem value="English(Australia)" sx={{ color: 'black' }}>English (Australia)</MenuItem>
          <MenuItem value="English(India)" sx={{ color: 'black' }}>English (India)</MenuItem>
          <MenuItem value="日本語" sx={{ color: 'black' }}>日本語</MenuItem>
          <MenuItem value="Francais" sx={{ color: 'black' }}>Francais</MenuItem>
          <MenuItem value="Español" sx={{ color: 'black' }}>Español</MenuItem>
          <MenuItem value="Italiano" sx={{ color: 'black' }}>Italiano</MenuItem>
          <MenuItem value="Deutsch" sx={{ color: 'black' }}>Deutsch</MenuItem>
          <MenuItem value="Norsk" sx={{ color: 'black' }}>Norsk</MenuItem>
          <MenuItem value="Svenska" sx={{ color: 'black' }}>Svenska</MenuItem>
          <MenuItem value="Tiếng Việt" sx={{ color: 'black' }}>Tiếng Việt</MenuItem>
          <MenuItem value="Nederlands" sx={{ color: 'black' }}>Nederlands</MenuItem>
          <MenuItem value="Dansk" sx={{ color: 'black' }}>Dansk</MenuItem>
        </Select>
      </FormControl> 
    </Box>
  );
};
