import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === "default") {
    const locale = req.cookies.get("NEXT_LOCALE")?.value || "en";

    if (req.nextUrl.pathname === "/") {
      return NextResponse.redirect(
        new URL(`/${locale}/about${req.nextUrl.search}`, req.url)
      );
    }

    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  } else {
    if (req.nextUrl.pathname === "/") {
      return NextResponse.redirect(
        new URL(`/${req.nextUrl.locale}/about${req.nextUrl.search}`, req.url)
      );
    }
  }
}
