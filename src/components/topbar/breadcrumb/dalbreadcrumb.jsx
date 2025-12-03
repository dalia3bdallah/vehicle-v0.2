
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
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>


            <div className="breadcrumb">
                <span className="crumb">
                    <a href="#">Vehicles</a>
                </span>
                <span className="separator">/</span>
                <span className="crumb">
                    <a href="#">Vehicle details</a>
                </span>
                <span className="separator">/</span>
                <span className="crumb current">Chevrolet Tahoe 2025</span>
            </div>
        </>
    );
}
