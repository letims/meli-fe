import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MeliApiService from '../api/meliApiService'

export interface User {
  id: number
  firstName: string
  lastName: string
  imageSrc: string
  level: string
  restrictions: string[]
}

export interface UserPurchase {
  id: number,
  itemTitle: string,
  imageSrc: string,
  vendorName: string,
  vendorId: string,
  date: Date,
  price: number,
  currency: string,
  amount: number,
  paymentStatus: string,
  shipmentStatus: string,
}

export interface PurchaseCollection {
  purchases: UserPurchase[],
  paginationData: { total: number; offset: number; limit: number }
}

export interface PurchaseParams {
  userId: number;
  limit?: number;
  page?: number;
}

export const getUser = createAsyncThunk<User>('user/getUser', async () => {
  try {
    return await MeliApiService.getUser()
  } catch(e) {
    console.log(e)
  }
})

export const getUserPurchases = createAsyncThunk<PurchaseCollection, PurchaseParams>('user/getUserPurchases', async (purchaseParams: PurchaseParams) => {
  try {
    const { userId, limit, page } = purchaseParams
    return await MeliApiService.getUserPurchases(userId, limit, page)
  } catch(e) {
    console.log(e)
  }
})

const initialState:{ data: User | PurchaseCollection | null; loading: string; error: string | null } = {
  data: null,
  loading: 'idle',
  error: null,
}

export const userSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getUser.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occurred'
      }
    })
    builder.addCase(getUserPurchases.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getUserPurchases.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getUserPurchases.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occurred'
      }
    })
  },
})

export default userSlice.reducer