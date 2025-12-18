export default function CertificateDesign({ data }) {
    const {
        certificateId = "CERT-2025-00123",
        name = "Shruti Singh",
        course = "Advanced Frontend Development",
        description = "",
        issueDate = "17 Dec 2025",
    } = data || {};

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div
                style={{
                    position: "relative",
                    width: "1123px",
                    height: "794px",
                    backgroundImage: "url('/certificate-bge.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                {/* TITLE */}
                <h1
                    style={{
                        position: "absolute",
                        top: "140px",
                        width: "100%",
                        textAlign: "center",
                        fontSize: "46px",
                        fontWeight: "800",
                        letterSpacing: "6px",
                        color: "#0e2a2d",
                    }}
                >
                    CERTIFICATE
                </h1>

                <p
                    style={{
                        position: "absolute",
                        top: "200px",
                        width: "100%",
                        textAlign: "center",

                        color: "#6b7280",
                        fontSize: "18px",
                    }}
                >
                    of Completion
                </p>

                {/* MICRO DIVIDER */}
                <div
                    style={{
                        position: "absolute",
                        top: "235px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <span style={{ width: "40px", height: "1px", background: "#c9a24d" }} />
                    <span style={{ width: "6px", height: "6px", background: "#c9a24d", borderRadius: "50%" }} />
                    <span style={{ width: "40px", height: "1px", background: "#c9a24d" }} />
                </div>

                {/* SUBTITLE */}
                <p
                    style={{
                        position: "absolute",
                        top: "255px",
                        width: "100%",
                        textAlign: "center",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        fontSize: "13px",
                        color: "#374151",
                    }}
                >
                    This certificate is proudly presented to
                </p>

                {/* WATERMARK (ASYMMETRIC) */}
                <img
                    src="/logonew.png"
                    alt="Watermark"
                    style={{
                        position: "absolute",
                        top: "270px",
                        left: "380px",
                        width: "360px",
                        opacity: 0.05,
                        pointerEvents: "none",
                    }}
                />

                {/* NAME GLOW */}
                <div
                    style={{
                        position: "absolute",
                        top: "290px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "520px",
                        height: "90px",
                        background: "rgba(201,162,77,0.08)",
                        filter: "blur(22px)",
                        borderRadius: "999px",
                    }}
                />

                {/* NAME */}
                <h2
                    style={{
                        position: "absolute",
                        top: "300px",
                        width: "100%",
                        textAlign: "center",
                        fontSize: "48px",
                        color: "#0e2a2d",
                        fontFamily: "'Brush Script MT','Segoe Script',cursive",
                    }}
                >
                    {name}
                </h2>

                {/* NAME LINE */}
                <div
                    style={{
                        position: "absolute",
                        top: "360px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "260px",
                        height: "2px",
                        background: "#c9a24d",
                    }}
                />

                {/* COURSE LABEL */}
                <p
                    style={{
                        position: "absolute",
                        top: "390px",
                        width: "100%",
                        textAlign: "center",
                        fontSize: "16px",
                        color: "#374151",
                    }}
                >
                    for successfully completing the course
                </p>

                {/* COURSE BADGE */}
                <div
                    style={{
                        position: "absolute",
                        top: "420px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        padding: "8px 26px",
                        borderRadius: "999px",
                        background: "rgba(14,42,45,0.06)",
                        color: "#0e2a2d",
                        fontWeight: "600",
                        fontSize: "16px",
                    }}
                >
                    {course}
                </div>

                {/* DESCRIPTION */}
                {description && (
                    <p
                        style={{
                            position: "absolute",
                            top: "470px",
                            width: "100%",
                            padding: "0 220px",
                            textAlign: "center",
                            fontSize: "15px",
                            lineHeight: "1.7",
                            color: "#4b5563",
                        }}
                    >
                        {description}
                    </p>
                )}

                {/* COURSE DESCRIPTION */}
                <p
                    style={{
                        position: "absolute",
                        top: "470px",
                        width: "100%",
                        padding: "0 260px",
                        textAlign: "center",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        color: "#4b5563",
                    }}
                >
                    This is to certify that the above individual has successfully completed
                    the course and demonstrated commitment, consistency, and proficiency
                    throughout the program.
                </p>

                {/* SIGNATURE */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "140px",
                        left: "160px",
                        textAlign: "center",
                    }}
                >
                    <div style={{ width: "160px", borderTop: "1px solid #4b5563", marginBottom: "6px" }} />
                    <p style={{ fontSize: "13px" }}>MANAGER</p>
                </div>

                {/* CERT ID STAMP */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "70px",
                        left: "50px",
                        padding: "6px 10px",
                        border: "1px solid rgba(0,0,0,0.15)",
                        fontSize: "10px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#374151",
                    }}
                >
                    Certificate ID: {certificateId}
                </div>
            </div>
        </div>
    );
}
