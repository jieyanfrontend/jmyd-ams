import StopStart from './stop_start'
import PasswordReset from './password_reset'
import ThemeProductChange from './theme_product_change'
import HLRReset from './HLR_reset'
import RealnameRegister from './realname_register'
import ModifyUserData from './modify_userdata'
import OrderBack from './order_back'
import BuyCancelModify from './buy_cancel_modify'
import PasswordRestDesignated from './password_reset_designated'
import BuyCancel from './buy_cancel'
import MultiBuyCancel from './multi_buy_cancel'
import AccountModify from './account_modify'
import BonusCorrect from './bonus_correct'
export default {
  '批开停开机': StopStart,
  '批量密码重置': PasswordReset,
  '批量主题产品转换': ThemeProductChange,
  '批量HLR重置业务': HLRReset,
  '批量实名登记': RealnameRegister,
  '批量更改客户资料': ModifyUserData,
  '批量订单回退': OrderBack,
  '批量产品订购退订与变更': BuyCancelModify,
  '批量密码重置_指定密码': PasswordRestDesignated,
  '批量产品订购退订': BuyCancel,
  '批量多层产品订购退订': MultiBuyCancel,
  '批量账户变更': AccountModify,
  '批量积分修正': BonusCorrect
}