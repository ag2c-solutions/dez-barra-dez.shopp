export const Banner = ()=>{
    return(
        <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-[400px]"
                  style={{
                    backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8UTdQuOMJS4nxCIZcaJrnHklHGt_MklYmp50xDKFg10uQks5kDUnzXRRFdi5ZuXMzBNbDJU9I2IntFY_tzITPaXfJAHb2y0eBti6bHCSBxZnlLByBX_p6e7q42HyOo4YyxgG3u2t9XYI9lrT1xzVxsD8E1btWdOTe1Xlhxwva5XdtkQPlxuf5h93HhWvCBsiWDreQGrEbnHbFLrynDWQlWNKnLHo5iKetVI5moVzNa5TZWvUd6PkR0Yag9nh73Td9SOmSnMQUlW_W'
                  }}
                >
                  <div className="flex p-4">
                    <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                        NOVA COLEÇÃO: CAMISAS DE TIMES EUROPEUS!
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}