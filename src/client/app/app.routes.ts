import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { VatRoutes } from "./vat/components/vat.routes";
import {CostRoutes} from "./cost/components/cost.routes";
import {BookRoutes} from "./book/components/book.routes";
import {ActivumRoutes} from "./activum/components/activum.routes";
import {CostMatchRoutes} from "./match/components/match.routes";
import {RegisterRoutes} from "./register/components/register.routes";
import {CustomerRoutes} from "./customer/components/customer.routes";
import {ProjectRoutes} from "./project/components/project.routes";
import {InvoiceRoutes} from "./invoice/components/invoice.routes";
import {FiscalOverviewRoutes} from "./fiscal-overview/components/fiscal-overview.routes";

export const routes: Routes = [
  ...HomeRoutes,
  ...VatRoutes,
  ...CostRoutes,
  ...CostMatchRoutes,
  ...BookRoutes,
  ...ActivumRoutes,
  ...CustomerRoutes,
  ...ProjectRoutes,
  ...InvoiceRoutes,
  ...FiscalOverviewRoutes,
  ...RegisterRoutes
];
