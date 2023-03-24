import UserDetails from '../components/UserDetails';
import Purchases from '../components/Purchases';
import { Container } from '@mui/material';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { getUser, getUserPurchases, PurchaseCollection, PurchaseParams, User, UserPurchase } from '../store/user/userSlice';

const PAGE_SIZE = 5;
const INITIAL_PAGE = 1

export interface PageState {
  isLoading: boolean,
  data: UserPurchase[],
  total: number,
  page: number,
  pageSize: number
}

export default function Profile() {
  const [userData, setUserData] = useState<any>(undefined)
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false)
  const [pageState, setPageState] = useState<PageState>({
    isLoading: false,
    data: [],
    total: 0,
    page: INITIAL_PAGE,
    pageSize: PAGE_SIZE
  })
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    async function loadUserData() {
      setIsLoadingUser(true)
      
      const data = await dispatch(getUser())
      const user: User = data.payload as User
      setUserData(user)
      setIsLoadingUser(false)
      const purchaseParams: PurchaseParams = {
        userId: user.id,
        limit: PAGE_SIZE,
        page: INITIAL_PAGE
      }
      setPageState(prev => ({
        ...prev,
        isLoading: true
      }))
      const res = await dispatch(getUserPurchases(purchaseParams))
      const purchaseData = res.payload as PurchaseCollection
      setPageState(prev => ({
        ...prev,
        isLoading: false,
        data: purchaseData.purchases,
        total: purchaseData.paginationData.total
      }))
    }

    if (!userData) {
      loadUserData()
    }
  }, [dispatch])

  useEffect(() => {
    setPageState(prev => ({
      ...prev,
      isLoading: true
    }))
    async function loadNewPage() {
      const purchaseParams: PurchaseParams = {
        userId: userData.id,
        limit: PAGE_SIZE,
        page: pageState.page
      }
      const res = await dispatch(getUserPurchases(purchaseParams))
      const purchaseData = res.payload as PurchaseCollection
      setPageState(prev => ({
        ...prev,
        isLoading: false,
        data: purchaseData.purchases,
        total: purchaseData.paginationData.total
      }))
    }

    loadNewPage()
  }, [pageState.page])

  const getContent = () => {
    if (isLoadingUser) {
      return (
          <Loading />
      )
    } else {
      return (
        <>
          <UserDetails userData={userData} />
          <Purchases
            pageState={pageState}
            setPageState={setPageState} />
        </>
      )
    }
  }
  
  return (
    <Container>
      {getContent()}
    </Container>
  )
}