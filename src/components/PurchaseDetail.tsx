import { Box, Link, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { UserPurchase } from '../store/user/userSlice';
import { formatCurrency, formatDate } from '../utils/formatUtil';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
  GoBackToPurchaseList,
  PurchaseAmount,
  PurchaseDate,
  PurchaseNumber,
  PurchasePaymentStatus,
  PurchasePrice,
  PurchaseShipmentStatus,
  PurchaseTotal,
  PurchaseVendor
} from '../assets/literals';
import { Fragment } from 'react';

interface PurchaseDetailProps {
  purchase: UserPurchase;
  showPurchaseList: () => void;
}

export default function PurchaseDetail(props: PurchaseDetailProps) {
    const { id, itemTitle, imageSrc, vendorName, date, price,
      currency, amount, paymentStatus, shipmentStatus } = props.purchase;

    return (
      <>
        <Box sx={{ display: 'flex', marginTop: '20px', background: 'palette.secondary' }}>
          <img alt={itemTitle} src={imageSrc} style={{ width: 250, height: 'auto' }} />
          <Card variant="outlined" sx={{ backgroundColor: 'secondary', width: '100%', marginLeft: '50px' }}>
            <Fragment>
              <CardContent>
                <Typography sx={{ mt: 1, mb: 1 }}>
                  {PurchaseNumber} {id} | {itemTitle}
                </Typography>
                <Typography sx={{ mt: 1, mb: 1 }}>
                  {PurchasePrice}: {formatCurrency(currency, price)}
                </Typography>
                <Typography sx={{ mt: 1, mb: 1 }}>
                  {PurchaseAmount}: {amount}
                </Typography>
                <Typography sx={{ mt: 1, mb: 1 }}>
                  {PurchaseTotal}: {formatCurrency(currency, price*amount)}
                </Typography>
                <Typography sx={{ mt: 1, mb: 1 }}>
                  {PurchaseVendor}: {vendorName}
                </Typography>
                <Typography sx={{ mt: 1, mb: 1 }}>
                  {PurchaseDate}: {formatDate(date)}
                </Typography>
                <Typography sx={{ mt: 1, mb: 1 }}>
                  {PurchasePaymentStatus}: {paymentStatus}
                </Typography>
                <Typography sx={{ mt: 1, mb: 1 }}>
                  {PurchaseShipmentStatus}: {shipmentStatus}
                </Typography>
              </CardContent>
            </Fragment>
          </Card>
        </Box>
        <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
          <ShoppingBasketIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          <Link component="button" onClick={props.showPurchaseList}>{GoBackToPurchaseList}</Link>
        </Typography>
      </>
    );
  }