import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#FFFFFF',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 320,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export const OfferBar = () => {

    return (<div>
        <div className="bg-black cursor-pointer text-white flex justify-center text-center py-2 relative">
            <span className=" underline flex items-center font-poppins">
                Get Started Today! Use Code DPLY to Save 10% on Your First Website Package!
                <HtmlTooltip
                    title={
                        <React.Fragment>
                            <Typography color="inherit">
                                <span className='font-sans font-thin'>Full <span className='underline text-blue-400'> terms and conditions </span>apply
                                </span>
                            </Typography>

                        </React.Fragment>
                    }
                >
                    <svg className="w-5 h-5 text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </HtmlTooltip>
            </span>
        </div>



    </div>
    );
};
