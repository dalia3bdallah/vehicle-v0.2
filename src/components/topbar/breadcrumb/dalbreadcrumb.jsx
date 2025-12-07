
import "./dalbreadcrumb.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function DalBreadCrumb() {
    return (
        <>

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Vehicles</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Vehicle details</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Chevrolet Tahoe 2025</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>


            {/* <div className="breadcrumb">
                <span className="crumb">
                    <a href="#">Vehicles</a>
                </span>
                <span className="separator">/</span>
                <span className="crumb">
                    <a href="#">Vehicle details</a>
                </span>
                <span className="separator">/</span>
                <span className="crumb current">Chevrolet Tahoe 2025</span>
            </div> */}
        </>
    );
}
